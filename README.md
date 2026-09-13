DevStack Website

DevStack is a single-page React application where users explore a catalog of developer technologies and add them to a personal "stack." It features a  sidebar of selected tools, duplicate prevention, toast notifications, and a fully responsive, gradient-themed UI.


🛠️ Techology :

UI library- react
component library- DaisyUI
Language-	TypeScript
Build tool-	Vite
Styling	-Tailwind CSS v4

Notifications	react-toastify

✨ Features:

- Explore a catalog of developer technologies
- Add technologies to a personal "stack"
- Duplicate prevention
- Toast notifications
- Responsive and gradient-themed UI


Q/A section: 
1. What is JSX and why is it used in React?

JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It is used to create React components and JSX is a key part of React's syntax.
        
2.  What is the difference between props and state?
Props are data passed into a component from its parent. They're read-only from the child's components , the child can't change its own props.
State which store data of a  component  and manages internally  . Changing state triggers a re-render.

3. What does the useState hook do, and where did you use it in this project?
 
 In react useStae hook is used to manage state in a functional component. it is used to store data and also used as a counter.
i used useState hook 3 times  it in the Technology.tsx file . 
where i used the state to store the data of the technologies and the props to pass the data to the child component.
 **const [technologyList, setTechnologyList] = useState<Technology[]>([]);
 
then i manage loading  using ihis hook
 **const [loading, setLoading] = useState(true);
  
  then i store data in the stackSidebar using this hook
 ** const [stack, setStack] = useState<Technology[]>([]);

 4.  What does the useEffect hook do, and why did you need it to load the JSON data?

In React the useEffect hook is used  to handle "side effects" in function components. A side effect is anything that reaches outside the scope of the React component to interact with the external world—such as fetching data from an API.

 i used useEffect hook to load the json data from the  public folder which is located in root directory of the project. 

 5. Why does every item in a .map() list need a unique key prop?
 
 Every item in a .map() list needs a unique key prop. This is because React uses a key to identify each item in the list.

 6. What is conditional rendering? Show one place you used it .

 Conditional rendering is a technique in React where you render different components or elements based on a condition.

 i used condition rendering in the technologyCard component where i used the isAdded prop to render the button with the text "✓ Added to Stack" if the technology is already in the stack or the text "Add to Stack" if it is not. 

 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

 parent component pass data to child component using props. child component send data back to parent component using state.

