# source(".Renviron.R")
Sys.setenv(
  QUARTO_PATH = paste0(
    "./.quarto-cli/quarto-", utils::read.table(".quarto-version")[1, ], "-macos/bin/quarto"
  ),
  RETICULATE_PYTHON_ENV = "pygis"
)
source("renv/activate.R")
