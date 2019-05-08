workflow "Publish to GitHub Pages" {
  resolves = ["Gatsby Publish"]
  on = "push"
}

action "On Master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Gatsby Publish" {
  uses = "enriikke/gatsby-gh-pages-action@1.0.0"
  secrets = ["ACCESS_TOKEN"]
  needs = ["On Master"]
}
