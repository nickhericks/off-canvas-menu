# Off-canvas menu
> An off-canvas menu that appears by pushing the screen to the right when a user clicks the menu button.

## View project
 :mag: Live version available at [nickhericks.github.io/off-canvas-menu/](https://nickhericks.github.io/off-canvas-menu/)

## What I learned
- CSS variables (Allows a CSS value to be stored in one place, then referenced in multiple other places within the stylesheet.)
- Update styling of elements on the page using JavaScript by creating classes and adding/removing them to change the way they look instead of writing JavaScript to edit each element of styling individually.

```JavaScript
:root {
  --color-mint: #dbfffa;
  --color-jade: #25c2a8;
  --color-grey: #3f424c;
}

.site-container {
  padding-top: 3rem;
  padding-left: 2.5rem;
  max-width: 33rem;
}

.offsite-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: -14rem;
  width: 14rem;
  background-color: var(--color-grey);
}

.offsite-is-open .site-container,
.offsite-is-open .offsite-container {
  transform: translateX(14rem);
}
```

## Acknowledgements
This project is part of a great JS course called [Learn JavaScript](https://learnjavascript.today/). Thank you to the course creator [@zellwk](https://github.com/zellwk) :raised_hands:

## Demo
<img src="https://raw.githubusercontent.com/zellwk/jsf/master/images/components/off-canvas/01-complete.gif?token=ABx4QS21LnOFP5RS0Uc_IK7CkfPnwWLFks5cbaDCwA%3D%3D" width="700">
