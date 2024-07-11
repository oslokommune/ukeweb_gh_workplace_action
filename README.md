# GitHub Workplace Action

This action posts the projects changelog to a Meta Workplace group.

## Build

```
npm install
./node_modules/.bin/ncc build index.js --license licenses.txt
```

## Example action setup

```
steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Workplace step
        id: changelog
        uses: oslokommune/ukeweb_gh_workplace_action@1.1.0
        with:
          group-id: ${{ secrets.WORKPLACE_GROUP_ID }}
          auth-token: ${{ secrets.WORKPLACE_AUTH_TOKEN }}
```
