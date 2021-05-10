# test-yarn2-mono

#### This is a yarn2 monorepo

##### Here are the steps:

* Create a test repo and change yarn into version 2 using the following command

  ```yarn set version berry```

* To use pnp, add `nodeLinker: pnp` in the project's root directory. This will create a `.yarn` folder and store all de dependencies in the `cache` folder of it.

* `yarn init` and set your workspaces in `package.json`

* Create folder for each workspace and then run `yarn init` in each workspace folder

* To reference packages in different workspaces, you have to declare it clearly in your workspace's   `package.json`:
  
  ```$package-name: "workspace: $workspace-name"```

* If in one workspace there are more than one sub-workspaces, you can declare it in your workspace's `package.json` like this:
  
  ```workspaces:["a", "b"]```

* To reference packages in different sub-workspaces but in the same workspace, you don't have to declare the workspace name again.
