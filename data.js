// STEP Apply — editable data file.
// To update: change the batch number, or set/replace a state's "url".
// - url: "" (empty) shows the state as "Coming soon" (grayed, not clickable)
// - url: a Google Form link, open: true  -> shows "Apply now" (clickable, accent button)
// - url: a Google Form link, open: false -> shows "Closed" (grayed, not clickable)
// Save this file and re-upload/commit to GitHub — no other file needs to change.

window.STEP_DATA = {
  batch: 13,
  eligibility: "This programme is only for the final year students of Polytechnic Diploma.",
  states: [
    { name: "Andhra Pradesh", url: "https://docs.google.com/forms/d/e/1FAIpQLSdZo-HGIBQHAH4-XAByWj3fg6S_NyN7S_K0An0ZiUoYutKylQ/viewform", open: true },
    { name: "Delhi", url: "", open: true },
    { name: "Kerala", url: "", open: true },
    { name: "Maharashtra", url: "", open: true },
    { name: "Odisha", url: "", open: true },
    { name: "Telangana", url: "", open: true },
    { name: "Uttar Pradesh", url: "", open: true },
    { name: "Uttarakhand", url: "", open: true },
    { name: "West Bengal", url: "https://docs.google.com/forms/d/e/1FAIpQLScgE63AnI8kaJQbZqCYPYY2DJyS1wcui0efQY2MvW7sU3K2Rg/closedform", open: false }
  ]
};
