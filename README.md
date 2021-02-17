# MyAccount E2E tests

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
- Jenkins with e2e test jobs: https://sqa62.jenkins.sqa.brs.nonprod.williamhill.plc/job/SpitfireMyAccount/

[urls.json]: https://git.nonprod.williamhill.plc/central-services/spitfire-myaccount-e2e-tests/blob/develop/src/test/config/urls.json
[specs]: https://git.nonprod.williamhill.plc/central-services/spitfire-myaccount-e2e-tests/tree/develop/src/test/specs
