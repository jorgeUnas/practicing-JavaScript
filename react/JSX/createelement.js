// This jsx element 

const greatestDivEver = <div>i am div</div>;


// is equivalent to say (without jsx)

const greatestDivEver = React.createElement(
  "div",
  null,
  "i am div"
);