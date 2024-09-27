# Nix configuration file for Node.js development.
# For more information, see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Define the Nixpkgs channel. You can switch between stable and unstable as per your needs.
  channel = "stable-23.11"; # Change to "unstable" for the latest packages.

  # List of packages to be included in the environment.
  # Use https://search.nixos.org/packages to search for other packages.
  packages = [
    # Node.js version 20 (you can change the version if needed).
    pkgs.nodejs_20

    # Nodemon - automatically restarts the application when file changes are detected.
    pkgs.nodePackages.nodemon

    # Yarn - alternative package manager to NPM, useful for managing dependencies.
    pkgs.yarn

    # Git - version control system for collaboration and code tracking.
    pkgs.git

    # Prettier - a code formatter for maintaining consistent code style.
    pkgs.nodePackages.prettier
  ];

  # Define any environment variables specific to the project.
  env = {
  };

  idx = {
    # VS Code extensions to enhance the development experience.
    # Find extensions at https://open-vsx.org/ and use the format "publisher.id".
    extensions = [

      # Prettier extension for automatic code formatting.
      "esbenp.prettier-vscode"

      # Nix extension for better support and syntax highlighting of Nix files.
      "bbenoist.nix"

      # GitLens - provides Git superpowers to VSCode, with blame and history.
      "eamodio.gitlens"
    ];

    # Disable web previews, as they are not needed in this configuration.
    previews = {
      enable = false;
    };

    # Workspace lifecycle hooks.
    workspace = {
      # Actions that run when the workspace is created for the first time.
      onCreate = {
        # Automatically install JavaScript dependencies using npm or yarn.
        install-deps = "yarn install"; # Change to "npm install" if using npm.

        # Optional: Open key project files automatically when the workspace is created.
        default.openFiles = [];
      };

      # Actions that run each time the workspace is (re)started.
      onStart = {
        # Optional: Start a background task to watch and re-build backend code.
      };
    };
  };
}
