# Build Stage
FROM node:22 as builder

WORKDIR /app

# Copy package.json and package-lock.json for dependencies installation
COPY package*.json ./
RUN rm -rf node_modules package-lock.json && npm cache clean --force
# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the project
RUN npm run build

# Deploy Stage
FROM amazon/aws-cli

# Define build arguments
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ARG AWS_DEFAULT_REGION

# Pass arguments as environment variables
ENV AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
ENV AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
ENV AWS_DEFAULT_REGION=$AWS_DEFAULT_REGION

# Copy build artifacts from builder stage
COPY --from=builder /app/dist/homestar/browser /source/

# Upload to S3 and invalidate CloudFront
RUN aws s3 sync /source/ s3://homestar-website --delete \
    && aws cloudfront create-invalidation --distribution-id EMCBOR99N64C6 --paths "/*"
