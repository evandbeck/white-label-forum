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

## Component Structure
- App
    - Login
    - Signup
    - WhiteLabelForum

    - Header
    - Navbar
    /SWITCH
    - Forum
        - ForumItem
    - Subforum
        - SubforumItem
        - CreatePost
        - EditPost
    - Post
        - OriginalComment
        - PostItem
        - CreateComment
        - EditComment
    - Profile
        - AboutMe
        - EditAboutMe
        - UsersPosts
    /SWITCH
    - Footer

## Notes

- A Forum has ForumItems, or Subforums
- A Subforum has SubforumItems, or Posts
- A Post has PostItems, or Comments
- A Comment can be Liked
