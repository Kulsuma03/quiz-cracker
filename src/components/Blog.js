import React from 'react';

const Blog = () => {
    return (
        <section className="bg-dark-200">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">

                <h2 className="mb-12 text-4xl font-bold leading-none text-purple-500 text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-medium text-xl">what is the purpose of react router?</h3>
                        <p className="mt-1 text-gray-600">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                            Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-xl">how does context api work?</h3>
                        <p className="mt-1 text-gray-600">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                        <br />
                        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. 
                        </p>
                    </div>
                    
                    
                </div>
                <div className='container w-6/12 mx-auto'>
                        <h3 className="font-medium text-xl">useHref</h3>
                        <p className="mt-1 text-gray-600">The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router.</p>
                    </div>
            </div>
        </section>
    );
};

export default Blog;