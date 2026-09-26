# GitHub Pages deployment

Repository name for this account:

`dekai-li.github.io`

Public website address after deployment:

`https://dekai-li.github.io`

## Browser-only deployment

1. Sign in to GitHub.
2. Click the `+` menu in the top-right corner -> **New repository**.
3. Repository name: `dekai-li.github.io`.
4. Set the repository to **Public**.
5. Create the repository.
6. In the repository, choose **Add file -> Upload files**.
7. Upload the *contents* of this folder to the repository root:
   - `index.html`
   - `cv.html`
   - `styles.css`
   - `script.js`
   - `.nojekyll`
   - `assets/`
8. Commit the files to `main`.
9. Open **Settings -> Pages**.
10. Under **Build and deployment**, set:
    - Source: `Deploy from a branch`
    - Branch: `main`
    - Folder: `/(root)`
11. Click **Save**.
12. Wait a few minutes, then open `https://dekai-li.github.io`.

## Updating the site later

Edit or replace files in the same repository and commit to `main`.
GitHub Pages will publish the new version automatically after the commit is processed.
