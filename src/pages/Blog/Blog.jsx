import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl text-center m-0 bg-gray-200 p-10'>Blog</h1>
            </div>
            <div className='ms-5 mt-5'>
                <div>
                    <div className='font-bold text-2xl'>
                        a. Tell us the differences between uncontrolled and controlled components.
                    </div>
                    <div>
                        <span className='font-bold'>Ans.</span> In a controlled component, form data is handled by a React component. Whereas in uncontrolled components, form data is handled by the DOM itself.
                        <br />
                        Usage of Component State is a must for controlled components. Use of state is completely optional for uncontrolled components, but one must use Refs in it.
                        <br />
                        With controlled components, we can validate as the input is being changed but the same is not possible with uncontrolled components.
                    </div>
                </div>
                <div>
                    <div className='font-bold text-2xl'>
                        b. How to validate React props using PropTypes?
                    </div>
                    <div>
                        <span className='font-bold'>Ans.</span> Props are an important mechanism for passing the read-only attributes to React components. The props are usually required to use correctly in the component. If it is not used correctly, the components may not behave as expected. Hence, it is required to use props validation in improving react components.
                        <br />
                        Props validation is a tool that will help the developers to avoid future bugs and problems. It is a useful way to force the correct usage of your components. It makes your code more readable. React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props, although it is not necessary to define components with propTypes. However, if you use propTypes with your components, it helps you to avoid unexpected bugs.
                        <br />
                        App.propTypes is used for props validation in react component. When some of the props are passed with an invalid type, you will get the warnings on JavaScript console. After specifying the validation patterns, you will set the App.defaultProps.
                    </div>
                </div>
                <div>
                    <div className='font-bold text-2xl'>
                        c. Tell us the difference between nodejs and express js.
                    </div>
                    <div>
                        <span className='font-bold'>Ans.</span> Node.js is a run-time environment created to run JavaScript on the server side.
                        <br />
                        Express.js is a framework for Node.js, so in order to use it, you will use Node.js anyway. Express.js will help you organize your application better. It provides many features which will speed up the development for example mechanism for middlewares, more efficient REST support or robust routing.
                    </div>
                </div>
                <div>
                    <div className='font-bold text-2xl'>
                        d. What is a custom hook, and why will you create a custom hook?
                    </div>
                    <div>
                        <span className='font-bold'>Ans.</span> Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use". Example: useFetch.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;