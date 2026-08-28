# Student Note — Movie Picture Pipeline

## Public GitHub repository

https://github.com/sriramark/rubric

## Live application URLs

Frontend (Movie List UI):
http://k8s-default-frontend-dbda3139c2-fed97c5324262a24.elb.ap-south-1.amazonaws.com

Backend (`/movies` API):
http://k8s-default-backend-ad482e3fc9-6f2236eb1bde6499.elb.ap-south-1.amazonaws.com:5000/movies

Both are internet-facing AWS Network Load Balancers fronting an EKS (Auto Mode)
cluster named `rubric` in `ap-south-1`.

## Workflows

All four workflows live under `.github/workflows/`:

| File | Workflow name | Trigger |
|---|---|---|
| `frontend-ci.yaml` | Frontend Continuous Integration | `pull_request` -> main, `workflow_dispatch` |
| `backend-ci.yaml`  | Backend Continuous Integration  | `pull_request` -> main, `workflow_dispatch` |
| `frontend-cd.yaml` | Frontend Continuous Deployment  | `push` -> main, `workflow_dispatch` |
| `backend-cd.yaml`  | Backend Continuous Deployment   | `push` -> main, `workflow_dispatch` |

In every workflow, `lint` and `test` run as separate parallel jobs, and `build`
declares `needs: [lint, test]` so it only runs when both succeed.

## Actions run links

Replace with the run URLs from the Actions tab:

- Frontend CI:  https://github.com/sriramark/rubric/actions/workflows/frontend-ci.yaml
- Backend CI:   https://github.com/sriramark/rubric/actions/workflows/backend-ci.yaml
- Frontend CD:  https://github.com/sriramark/rubric/actions/workflows/frontend-cd.yaml
- Backend CD:   https://github.com/sriramark/rubric/actions/workflows/backend-cd.yaml

