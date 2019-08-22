workflow "Publish to GitHub Pages" {
  resolves = ["Gatsby Publish"]
  on = "push"
}

action "On Dev" {
  uses = "actions/bin/filter@master"
  args = "branch dev"
}

action "Gatsby Publish" {
  uses = "enriikke/gatsby-gh-pages-action@1.0.0"
  secrets = ["ACCESS_TOKEN"]
  env = {
    DEPLOY_BRANCH = "master"
  }
  needs = ["On Dev"]
}
