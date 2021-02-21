# Friday QA Assignment

## Install

```
$ yarn
```

## Usage

### Scripts

- `test:e2e:local` - run locally
- `test:e2e:ci` - run on Jenkins with installed browser locally
- `test:e2e:bs` - run on BrowserStack

### Arguments

- `--env` - for all possible values check [urls.json]
- `--suite` - run only tests from specified suite (check [specs] folder)

### Environment variables

- `LOCAL_LOG_JSON`

### Examples

- Start locally with English jurisdiction

  ```
  $ yarn test:e2e:local --env=dev
  ```

- Start locally with Spanish jurisdiction

  ```
  $ yarn test:e2e:local --env=dev-es
  ```

- Start locally tests on pp env
  ```
  yarn test:e2e:local --suite=[suite] --env=[env]
  ```
- Start locally one test file
  ```
  yarn test:e2e:local --spec=[relative path to test file] --env=[env]
  ```
- Start locally one test file sample
  ```
  yarn test:e2e:local  --suite=navigationExternalLinks  --env=liv
  ```
