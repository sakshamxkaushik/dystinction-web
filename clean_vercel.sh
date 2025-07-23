command
# ./clean_vercel.sh v0-dystinction-landing-page 3

#!/bin/bash

# Usage: ./clean_vercel.sh <project-name> <keep-count>
# Example: ./clean_vercel.sh v0-dystinction-landing-page 3

PROJECT_NAME=$1
KEEP_COUNT=$2

if [ -z "$PROJECT_NAME" ] || [ -z "$KEEP_COUNT" ]; then
  echo "Usage: $0 <project-name> <keep-count>"
  exit 1
fi

echo "Fetching deployments for project: $PROJECT_NAME ..."
vercel list $PROJECT_NAME > deployments.txt

echo "Extracting deployments (keeping latest $KEEP_COUNT)..."
grep -o 'https://[^ ]*' deployments.txt | tail -n +$((KEEP_COUNT + 1)) > delete_urls.txt

if [ ! -s delete_urls.txt ]; then
  echo "No old deployments found to delete. Exiting."
  exit 0
fi

echo "The following deployments will be deleted:"
cat delete_urls.txt

echo ""
read -p "Do you want to proceed? (y/N): " CONFIRM
if [[ "$CONFIRM" != "y" && "$CONFIRM" != "Y" ]]; then
  echo "Aborted."
  exit 0
fi

echo "Deleting old deployments..."
cat delete_urls.txt | xargs -n1 vercel remove -y

echo "Cleanup complete. Remaining deployments:"
vercel list $PROJECT_NAME

