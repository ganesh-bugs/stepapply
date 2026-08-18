# STEP Apply — GitHub Pages hosting

## Files
- `index.html` — the live application page (what visitors see)
- `data.js` — batch number, eligibility text, and all state links (the only file you normally edit)
- `admin.html` — a local tool to generate an updated `data.js` without hand-editing code

## One-time setup
1. Create a new GitHub repository (e.g. `step-apply`), public or private — Pages works with either on a paid plan, public is simplest on the free plan.
2. Upload `index.html` and `data.js` to the repo root (drag-and-drop on github.com works, or `git push`).
3. In the repo: **Settings → Pages → Source → Deploy from a branch → main / (root)**. Save.
4. GitHub gives you a URL like `https://yourusername.github.io/step-apply/`. Confirm the page loads and shows the current states correctly.
5. Still in **Settings → Pages → Custom domain**, enter `stepapply.com` and save. GitHub creates a `CNAME` file in your repo automatically.
6. At your domain registrar (wherever stepapply.com is managed), point the domain to GitHub Pages:
   - Add an **A record** for the root domain to GitHub's IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - If you use `www.stepapply.com` too, add a **CNAME record** for `www` pointing to `yourusername.github.io`
7. Back in GitHub Pages settings, check **Enforce HTTPS** once the certificate is issued (can take a few minutes to hours after DNS propagates).

## Updating each year / as forms open
**Batch number or eligibility text:**
Open `admin.html` in your browser (just double-click the file, no internet needed), update the "Batch number" or "Eligibility text" field, click **Generate data.js**, then **Download data.js**. Upload/commit the downloaded file to the repo, replacing the old one.

**A state's form link:**
Open `admin.html`, find the state, paste the new Google Form link in its field, check/uncheck "Open" (open = clickable "Apply now"; unchecked with a link = shows "Closed"; blank link = shows "Coming soon"). Click **Generate data.js** → **Download data.js** → upload/commit to the repo.

The site updates within a minute or two of the commit — no other file needs to change.

## Keeping the admin tool
Keep `admin.html` somewhere handy (your computer, or in the repo itself under a non-linked path) — it's never linked from the public site, so it's safe to leave in the repo if convenient.
