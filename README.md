# /white-label-forum
## Application Guidelines
To Run:
- sudo service postgresql start
- rails s
- npm start --prefix client

## Known Buglist
- Signup does not redirect to forum page
- Original Comment does not show user information until a second comment has been created.
    - Likely because OC information is pulled from the comments array[0], and cannot populate until other comments exist. Need to refactor.

## Upcoming Features
- Update UI/Icons
- Rich Text Editor
    - https://www.slatejs.org/examples/richtext
    - https://mantine.dev/others/rte/
- Forum Directory Navigation
- Friends List
