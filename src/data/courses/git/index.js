// Git & GitHub course — data-driven content consumed by Course/Topic pages.

export const gitCourse = {
  id: 'git',
  title: 'Git & GitHub',
  tagline: 'Track every change. Collaborate with confidence.',
  description:
    'A beginner-to-advanced path through Git and GitHub: the three-areas model, everyday commands, branching and merging, rebasing, resolving conflicts, remotes, pull requests, and the undo toolkit every developer needs.',
  level: 'Beginner → Advanced',
  icon: 'GitBranch',
  accent: 'orange',
  chapters: [
    {
      id: 'git-basics',
      title: 'Git Basics',
      topics: [
        {
          id: 'what-is-git',
          title: 'What & Why Git',
          summary: 'A distributed version control system that tracks changes over time.',
          content: [
            { type: 'paragraph', text: 'Git is a distributed version control system that tracks changes to your code over time. It stores snapshots (commits) of your project, and every clone of a repository carries the full history.' },
            { type: 'heading', text: 'Why it matters' },
            { type: 'list', ordered: false, items: [
              'Undo mistakes safely.',
              'Collaborate with other people on the same codebase.',
              'Experiment freely using branches.',
              'Audit who changed what, and when.',
            ]},
            { type: 'heading', text: 'Git vs GitHub' },
            { type: 'table', headers: ['Git', 'GitHub'], rows: [
              ['The version control tool that runs on your machine', 'A hosting service for Git repositories, plus collaboration tools'],
              ['Works fully offline', 'Adds pull requests, issues, and code review'],
            ]},
            { type: 'callout', variant: 'note', title: 'Advantages & limits', text: 'Advantages: works offline, fast branching and merging, tamper-evident history via hashes. Limits: a learning curve for beginners, and history-rewriting commands (like rebase) can confuse newcomers.' },
          ],
        },
        {
          id: 'install-and-setup',
          title: 'Install & First Setup',
          summary: 'Install Git, set your identity, then create or clone a repo.',
          content: [
            { type: 'list', ordered: true, items: [
              'Install Git for your OS.',
              'Set your name: git config --global user.name "Your Name"',
              'Set your email: git config --global user.email "you@example.com"',
              'Optionally configure a default branch name, editor, and line-ending behaviour.',
            ]},
            { type: 'code', language: 'bash', title: 'Starting a project', code: `# Option A: start fresh\ncd my-project\ngit init\n\n# Option B: clone an existing repo\ngit clone https://github.com/user/repo.git` },
            { type: 'table', headers: ['SSH', 'HTTPS'], rows: [
              ['Better long-term — no password prompt on every push', 'Easiest to start with, works everywhere'],
            ]},
            { type: 'callout', variant: 'warning', title: 'Common mistakes', text: 'Committing before setting your identity (the wrong author gets attached), and cloning into messy, deeply nested folders that break scripts and paths.' },
          ],
        },
        {
          id: 'three-areas-model',
          title: 'The Three Areas Model',
          summary: 'Working directory, staging area, and local repository.',
          content: [
            { type: 'paragraph', text: 'Git has three main places your code can live before it reaches others.' },
            { type: 'table', headers: ['Area', 'What it holds'], rows: [
              ['Working directory', 'The files you actually edit — untracked and modified files.'],
              ['Staging area (index)', 'A snapshot of exactly what will go into the next commit.'],
              ['Local repository', "Your project's committed history, stored in .git."],
            ]},
            { type: 'code', language: 'bash', title: 'Moving between areas', code: `git add app.py utils.py   # working directory -> staging area\ngit commit -m "fix: correct calculation"  # staging area -> local repo\ngit push                  # local repo -> remote (e.g. GitHub)` },
            { type: 'callout', variant: 'tip', title: 'Why it matters', text: 'Staging gives you exact control over what enters each commit — you can edit three files but stage only two, so only those two are recorded together.' },
          ],
        },
        {
          id: 'core-workflow-commands',
          title: 'Core Workflow Commands',
          summary: 'The daily loop: see changes, stage, commit, review history.',
          content: [
            { type: 'table', headers: ['Command', 'What it does'], rows: [
              ['git status', "Shows what's changed, staged, or untracked."],
              ['git add <file> / git add -p', 'Stages changes for the next commit.'],
              ['git commit -m "message"', 'Records staged changes as a snapshot.'],
              ['git log --oneline --graph', "Compact, graph view of the project's history."],
              ['git diff / git diff --staged', 'Shows unstaged or staged changes before committing.'],
            ]},
            { type: 'heading', text: 'Writing a good commit message' },
            { type: 'list', ordered: false, items: [
              'Use the imperative mood — e.g. "Fix login redirect", not "fixed" or "fixes".',
              'Explain why, not just what — e.g. "Prevent redirect loop on login".',
              'Keep the subject line short, roughly 50 characters.',
            ]},
            { type: 'callout', variant: 'warning', title: 'Common mistake', text: 'Vague messages like "update stuff" give future you (and teammates) nothing to work with. Prefer small, focused, well-described commits.' },
          ],
        },
        {
          id: 'gitignore',
          title: '.gitignore & Clean Repos',
          summary: 'Keep secrets, build output, and dependencies out of your history.',
          content: [
            { type: 'paragraph', text: 'A .gitignore file tells Git which untracked files or folders to skip entirely — secrets, build output, dependency folders, and OS/editor junk.' },
            { type: 'code', language: 'text', title: 'A typical Node project .gitignore', code: `# dependencies\nnode_modules/\n\n# env\n.env\n.env.*\n\n# build\ndist/\nbuild/\ncoverage/\n\n# logs\n*.log\nnpm-debug.log*\n\n# OS\n.DS_Store\nThumbs.db\n\n.vscode/\n.idea/` },
            { type: 'callout', variant: 'warning', title: 'Already tracked?', text: "Adding a pattern to .gitignore won't untrack a file that's already committed. Remove it from tracking first with git rm --cached <file>, then commit." },
            { type: 'callout', variant: 'danger', title: 'Common mistake', text: 'Committing a .env file and "deleting" it later — the secret still lives in the commit history. Add .gitignore before you ever commit secrets, and rotate any credentials that leaked.' },
          ],
        },
      ],
    },
    {
      id: 'branching-and-history',
      title: 'Branching, Merging & History',
      topics: [
        {
          id: 'branching-basics',
          title: 'Branching Basics',
          summary: 'Cheap, movable pointers that enable parallel lines of work.',
          content: [
            { type: 'paragraph', text: 'Branches are movable pointers to commits — a cheap way to work on something in isolation without touching the main line of development.' },
            { type: 'table', headers: ['Command', 'What it does'], rows: [
              ['git branch', 'Lists branches.'],
              ['git switch -c feature/login', 'Creates and switches to a new branch.'],
              ['git switch main', 'Switches back to main.'],
              ['git branch -d feature/login', 'Deletes a branch after it has been merged.'],
            ]},
            { type: 'callout', variant: 'tip', title: 'Naming tips', text: 'Use prefixes for clarity: feature/ for new work, fix/ for bug fixes, chore/ for maintenance and tooling.' },
            { type: 'callout', variant: 'warning', title: 'Common mistakes', text: 'Long-lived branches that drift far from main, committing directly on main (especially in teams), and forgetting to merge or delete finished branches.' },
          ],
        },
        {
          id: 'merge-strategies',
          title: 'Merge Strategies',
          summary: 'Fast-forward, 3-way merge, and squash merge.',
          content: [
            { type: 'paragraph', text: 'Merging joins histories so that one branch includes another branch\'s commits.' },
            { type: 'table', headers: ['Type', 'What happens'], rows: [
              ['Fast-forward', 'The branch pointer simply moves forward — no merge commit created.'],
              ['3-way merge', 'Creates a merge commit with two parents; preserves full branch history.'],
              ['Squash merge', 'Combines all commits from the branch into a single commit on main — keeps history linear and clean.'],
            ]},
            { type: 'code', language: 'bash', title: 'Typical merge flow', code: `git switch main\ngit pull\ngit merge feature/login\ngit branch -d feature/login` },
            { type: 'callout', variant: 'warning', title: 'Common mistake', text: 'Merging without pulling the latest main first can create unnecessary conflicts or overwrite recent changes.' },
          ],
        },
        {
          id: 'rebase-basics',
          title: 'Rebase Basics',
          summary: 'Replay your commits on top of another tip for a cleaner history.',
          content: [
            { type: 'paragraph', text: 'Rebase replays your commits on top of another branch tip, often to keep a cleaner, linear history instead of extra merge commits.' },
            { type: 'code', language: 'bash', title: 'Rebasing a feature branch onto main', code: `git switch feature\ngit fetch\ngit rebase origin/main` },
            { type: 'table', headers: ['Merge', 'Rebase'], rows: [
              ['Joins histories, keeps every commit', 'Rewrites local feature history into a straight line'],
              ['Creates merge commits', 'Creates no merge commits'],
            ]},
            { type: 'callout', variant: 'danger', title: 'The golden rule', text: 'Do NOT rebase commits that have already been pushed and shared, unless the whole team has agreed — rebasing rewrites history and can overwrite or lose other people\'s work. If you must, use --force-with-lease instead of --force.' },
          ],
        },
        {
          id: 'resolving-conflicts',
          title: 'Resolving Conflicts',
          summary: 'What conflict markers mean, and how to work through them.',
          content: [
            { type: 'paragraph', text: "Conflicts happen when Git can't automatically combine overlapping changes — usually because two branches edited the same lines differently." },
            { type: 'code', language: 'text', title: 'Conflict markers, explained', code: `<<<<<<< HEAD\n// code from your current branch\nint total = price * qty;\n=======\n// code from the incoming branch\nint total = price * quantity;\n>>>>>>> feature-branch` },
            { type: 'list', ordered: true, items: [
              'A merge or rebase starts a conflict.',
              'Open the conflicted files and look for <<<<<<< / ======= / >>>>>>> markers.',
              'Edit the code down to the single correct version, then delete the markers.',
              'Stage the resolved file: git add <resolved-file>',
              'Continue with git merge --continue or git rebase --continue.',
            ]},
            { type: 'callout', variant: 'tip', title: 'Tips', text: 'Pull or rebase often to reduce the odds of large conflicts, keep changes small and focused, and talk to your teammate directly about logic-level conflicts.' },
          ],
        },
        {
          id: 'remotes-fetch-pull-push',
          title: 'Remotes: Fetch, Pull, Push',
          summary: 'Remotes are named links to other repositories — usually origin on GitHub.',
          content: [
            { type: 'table', headers: ['Term', 'Meaning'], rows: [
              ['remote', 'A named URL pointing at another repository (commonly "origin").'],
              ['fetch', "Downloads new commits from the remote, but doesn't merge them."],
              ['pull', 'fetch + merge (or rebase) — integrates remote changes into your branch.'],
              ['push', 'Uploads your local commits to the remote.'],
            ]},
            { type: 'code', language: 'bash', code: `git remote -v                       # show remotes\ngit fetch origin                    # download new commits\ngit pull                            # fetch + merge\ngit push -u origin feature/login    # push and set upstream tracking` },
            { type: 'callout', variant: 'danger', title: 'Common mistakes', text: "Force-pushing to main or a shared branch can overwrite other people's work. Pushing without pulling first, when histories have diverged, will simply be rejected — pull, resolve, then push." },
          ],
        },
      ],
    },
    {
      id: 'github-and-collaboration',
      title: 'GitHub & Collaboration',
      topics: [
        {
          id: 'github-essentials',
          title: 'GitHub Essentials',
          summary: 'Repositories, README, issues, pull requests, and actions.',
          content: [
            { type: 'paragraph', text: 'GitHub hosts Git repositories and adds "social coding" features on top: issues, pull requests, README files, and automation via Actions.' },
            { type: 'table', headers: ['Piece', 'What it does'], rows: [
              ['Repository', 'Stores your code history and enables collaboration.'],
              ['README.md', 'Explains the project — what it is, why it exists, how to run it.'],
              ['Issues', 'Tracks bugs, feature requests, and tasks.'],
              ['Pull Requests', 'Proposes changes and enables review before merging.'],
              ['Actions', 'Automates build, test, and deploy steps.'],
            ]},
            { type: 'code', language: 'bash', title: 'Quick repo setup', code: `# 1. create a repo on GitHub, then:\ngit clone <url>\ncd repo\ngit add .\ngit commit -m "init"\ngit push -u origin main` },
            { type: 'callout', variant: 'warning', title: 'Never hardcode tokens/keys in code', text: 'Use HTTPS with a personal access token, or SSH keys, for authentication — never commit secrets directly into a repository.' },
          ],
        },
        {
          id: 'pull-requests',
          title: 'Pull Requests',
          summary: 'Propose merging your branch — with discussion and review.',
          content: [
            { type: 'paragraph', text: 'A pull request (PR) proposes merging your branch into another one, with room for discussion, review, and automated checks before it lands.' },
            { type: 'list', ordered: true, items: [
              'Push your branch and commits.',
              'Open a PR (base = main, compare = your feature branch).',
              'Reviewers comment and CI checks run automatically.',
              'The PR is merged (merge, squash, or rebase).',
              'The now-merged branch is deleted.',
            ]},
            { type: 'heading', text: 'A good PR' },
            { type: 'list', ordered: false, items: [
              'Has a clear title and a description covering why, what, and how it was tested.',
              'Keeps the diff small and focused.',
              'Includes screenshots for UI changes.',
            ]},
            { type: 'callout', variant: 'warning', title: 'Common mistakes', text: 'Giant, thousand-line PRs that are hard to review; missing descriptions; merging with failing CI; ignoring or rubber-stamping review comments.' },
          ],
        },
        {
          id: 'collaboration-workflows',
          title: 'Collaboration Workflows',
          summary: 'Shared rules for how code enters main.',
          content: [
            { type: 'paragraph', text: 'Teams need shared rules about who can push, and how code makes it into the main branch.' },
            { type: 'table', headers: ['Model', 'How it works'], rows: [
              ['Shared repo + feature branches + PRs', 'The most common model — everyone branches off main and opens PRs.'],
              ['Fork & PR', 'Common for open source — contributors fork the repo, then PR back to the original.'],
            ]},
            { type: 'heading', text: 'Branch protection basics' },
            { type: 'list', ordered: false, items: [
              'Protect main — disallow direct pushes.',
              'Require PR reviews — at least one or two approvals.',
              'Require status checks — CI must pass (tests, build, lint).',
              'Disable force pushes — keeps history safe and auditable.',
            ]},
            { type: 'callout', variant: 'note', title: 'CODEOWNERS', text: 'A CODEOWNERS file maps paths to owners, so the right people are automatically requested for review — reducing the "nobody knows this code" problem.' },
          ],
        },
        {
          id: 'undo-toolkit',
          title: 'The Undo Toolkit',
          summary: 'Different tools for undoing changes at different stages.',
          content: [
            { type: 'table', headers: ['Situation', 'Command', 'Notes'], rows: [
              ['Unstage a file', 'git restore --staged <file>', 'Safe.'],
              ['Discard working changes', 'git restore <file>', 'Danger — permanently loses local edits.'],
              ['Fix the last commit message (not pushed)', 'git commit --amend', 'Only if not already pushed.'],
              ['Undo a commit safely (pushed/shared)', 'git revert <sha>', 'Creates a new commit that undoes changes — safe for shared branches.'],
              ['Move the branch pointer', 'git reset --soft/--mixed/--hard', 'Careful — --hard deletes uncommitted work.'],
            ]},
            { type: 'callout', variant: 'tip', title: 'Recovery hint', text: 'git reflog logs everywhere HEAD has been, so it can help you find and recover commits that look "lost" after a reset.' },
            { type: 'callout', variant: 'warning', title: 'Common mistakes', text: 'Using reset --hard without a stash can permanently lose work. Using amend after pushing (without team coordination) rewrites public history.' },
          ],
        },
        {
          id: 'stash-cherry-pick-tags',
          title: 'Stash, Cherry-Pick & Tags',
          summary: 'Save work-in-progress, copy single commits, and mark releases.',
          content: [
            { type: 'heading', text: 'Stash' },
            { type: 'paragraph', text: 'Temporarily shelves uncommitted changes so you can switch branches, then bring them back later.' },
            { type: 'code', language: 'bash', code: `git stash        # save work in progress\ngit stash list   # see stashes\ngit stash pop    # re-apply and remove the latest stash` },
            { type: 'heading', text: 'Cherry-pick' },
            { type: 'paragraph', text: 'Applies the changes from a single commit onto your current branch, without merging the whole source branch.' },
            { type: 'code', language: 'bash', code: `git log --oneline\ngit cherry-pick <sha>` },
            { type: 'heading', text: 'Tags' },
            { type: 'paragraph', text: 'A tag marks a specific point in history — usually a release — and, unlike branches, tags are meant to stay fixed.' },
            { type: 'code', language: 'bash', code: `git tag v1.2.0\ngit tag -a v1.2.0 -m "v1.2.0 release"\ngit push origin --tags` },
            { type: 'callout', variant: 'warning', title: 'Mistakes', text: 'Forgetting stashes leads to lost track of old work. Moving or recreating tags after they\'ve been shared breaks trust in what a tag points to.' },
          ],
        },
        {
          id: 'reflog-bisect-interactive-rebase',
          title: 'Reflog, Bisect & Interactive Rebase',
          summary: 'Advanced recovery and history-cleanup tools.',
          content: [
            { type: 'heading', text: 'Reflog — a diary of HEAD moves' },
            { type: 'paragraph', text: 'Git records everywhere HEAD and branches have pointed — even after resets, checkouts, and rebases — letting you recover commits that otherwise look gone.' },
            { type: 'code', language: 'bash', code: `git reflog\ngit reset --hard <sha-from-reflog>` },
            { type: 'heading', text: 'Bisect — binary search for a bad commit' },
            { type: 'paragraph', text: 'git bisect finds the first commit that introduced a bug by checking commits between a known-good and known-bad point, in O(log n) steps.' },
            { type: 'code', language: 'bash', code: `git bisect start\ngit bisect bad\ngit bisect good v1.0\n# Git checks out a midpoint commit — test it, then:\ngit bisect good   # or\ngit bisect bad` },
            { type: 'heading', text: 'Interactive rebase — clean up local commits' },
            { type: 'paragraph', text: 'git rebase -i lets you squash, reword, and reorder local commits before opening a PR, producing a cleaner history.' },
            { type: 'code', language: 'bash', code: `git rebase -i HEAD~4\n# pick, reword, squash, fixup, drop` },
            { type: 'callout', variant: 'danger', title: 'Safety', text: 'Only rewrite unpushed commits unless the whole team has coordinated on it — never run interactive rebase on shared branches like main.' },
          ],
        },
        {
          id: 'security-and-github-actions',
          title: 'Security & GitHub Actions Intro',
          summary: 'Keep secrets out of Git, and automate checks with CI.',
          content: [
            { type: 'heading', text: 'Security basics' },
            { type: 'list', ordered: false, items: [
              'Never commit secrets or API keys — tokens, passwords, keys.',
              'Use .env files plus a secrets manager (GitHub Secrets, AWS Secrets Manager, Vault, Doppler, 1Password).',
              'Rotate credentials immediately if one leaks; history-rewriting tools like BFG Repo-Cleaner exist, but are risky if mishandled.',
              'Prefer SSH keys or fine-grained personal access tokens, with least privilege.',
            ]},
            { type: 'heading', text: 'GitHub Actions, briefly' },
            { type: 'paragraph', text: 'A workflow (YAML) runs on events like push or pull_request. It contains jobs, made of steps — commonly install, test, and lint.' },
            { type: 'code', language: 'yaml', title: 'A minimal CI workflow', code: `name: CI\non:\n  pull_request:\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: '20'\n      - run: npm ci\n      - run: npm test` },
            { type: 'callout', variant: 'tip', title: 'Why CI?', text: 'Automated checks catch breaks before they ever reach main, and a status badge on the PR shows pass/fail at a glance.' },
          ],
        },
        {
          id: 'roadmap-and-cheat-sheet',
          title: 'Roadmap & Cheat Sheet',
          summary: 'A 7-week path through Git, plus a compact command reference.',
          content: [
            { type: 'heading', text: 'A suggested 7-week path' },
            { type: 'list', ordered: true, items: [
              'Week 1 — Install, setup, and the core workflow.',
              'Week 2 — Staging, commits, and .gitignore.',
              'Week 3 — Branches, merging, and conflicts.',
              'Week 4 — Remotes, GitHub, and pull requests.',
              'Week 5 — Undo, stash, and tags.',
              'Week 6 — Rebase, reflog, and bisect.',
              'Week 7 — Team workflow and a GitHub Actions mini-project.',
            ]},
            { type: 'heading', text: 'Daily commands' },
            { type: 'code', language: 'bash', code: `git status\ngit add .\ngit commit -m "message"\ngit log --oneline --graph\ngit diff` },
            { type: 'heading', text: 'Branch & remote commands' },
            { type: 'code', language: 'bash', code: `git switch -c new-branch\ngit switch branch-name\ngit merge branch-name\ngit fetch\ngit pull\ngit push` },
            { type: 'callout', variant: 'note', title: 'Must-know checks', text: 'Clear, meaningful commit messages. Small commits over big dumps. .gitignore before your first commit. Never rebase shared branches blindly. Never commit secrets.' },
          ],
        },
      ],
    },
  ],
};
