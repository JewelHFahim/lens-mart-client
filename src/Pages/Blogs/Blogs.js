import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-3xl text-center text-primary my-5">
        Welcomoe to Blog
      </h2>

      <div className="border text-center bg-base-100 shadow-xl my-5 p-5">
        <h1 className="text-lg font-bold">
          The Four Kinds of React State to Manage
        </h1>
        <p className=" w-8/12 mx-auto border text-left  my-2">
          {" "}
          Local state <br />
          Global state <br />
          Server state <br />
          URL state <br />
          <span className=" font-bold">Local (UI) state – </span> Local state is
          data we manage in one or another component. Local state is most often
          managed in React using the useState hook. For example, local state
          would be needed to show or hide a modal component or to track values
          for a form component, such as form submission, when the form is
          disabled and the values of a form’s inputs.
          <br /> <br />
          <span className=" font-bold">Global (UI) state –</span> Global state
          is data we manage across multiple components. Global state is
          necessary when we want to get and update data anywhere in our app, or
          in multiple components at least. A common example of global state is
          authenticated user state. If a user is logged into our app, it is
          necessary to get and change their data throughout our application.
          Sometimes state we think should be local might become global.
          <br /> <br />
          <span className=" font-bold">Server state –</span> Data that comes
          from an external server that must be integrated with our UI state.
          Server state is a simple concept, but can be hard to manage alongside
          all of our local and global UI state. There are several pieces of
          state that must be managed every time you fetch or update data from an
          external server, including loading and error state. Fortunately there
          are tools such as SWR and React Query that make managing server state
          much easier.
          <br /> <br />
          <span className=" font-bold">URL state – </span>Data that exists on
          our URLs, including the pathname and query parameters. URL state is
          often missing as a category of state, but it is an important one. In
          many cases, a lot of major parts of our application rely upon
          accessing URL state. Try to imagine building a blog without being able
          to fetch a post based off of its slug or id that is located in the
          URL! There are undoubtedly more pieces of state that we could
          identify, but these are the major categories worth focusing on for
          most applications you build.
        </p>

        <h1 className="text-lg font-bold mt-5">
          The Four Kinds of React State to Manage
        </h1>
        <p className=" w-8/12 mx-auto border text-left my-2">
          <span className=" font-bold">
            Prototypal Inheritance using __proto__
          </span>
          <br />
          Every object with its methods and properties contains an internal and
          hidden property known as [[Prototype]]. The Prototypal Inheritance is
          a feature in javascript used to add methods and properties in objects.
          It is a method by which an object can inherit the properties and
          methods of another object. Traditionally, in order to get and set the
          [[Prototype]] of an object, we use Object.getPrototypeOf and
          Object.setPrototypeOf. Nowadays, in modern language, it is being set
          using __proto__
        </p>

        <h1 className="text-lg font-bold mt-5">
          The Four Kinds of React State to Manage
        </h1>
        <p className=" w-8/12 mx-auto border text-left my-2">
          <span className=" font-bold"> Unit Testing</span>
          <br />
          is a type of software testing where individual units or components of
          a software are tested. The purpose is to validate that each unit of
          the software code performs as expected. Unit Testing is done during
          the development (coding phase) of an application by the developers.
          Unit Tests isolate a section of code and verify its correctness. A
          unit may be an individual function, method, procedure, module, or
          object. <br /> <br />
          In SDLC, STLC, V Model, Unit testing is first level of testing done
          before integration testing. Unit testing is a WhiteBox testing
          technique that is usually performed by the developer. Though, in a
          practical world due to time crunch or reluctance of developers to
          tests, QA engineers also do unit testing.
        </p>

        <h1 className="text-lg font-bold mt-5">
          The Four Kinds of React State to Manage
        </h1>
        <div className=" w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          <div>
            <h1 className="bg-slate-300 py-2 font-bold">Angular</h1>
            <p className="text-left mt-2 ">
              In Angular, components are referred to as directives. Directives
              are just markers on DOM elements, which Angular can track and
              attach specific behavior too. Therefore, Angular separates the UI
              part of components as attributes of HTML tags, and their behaviors
              in the form of JavaScript code. This is what sets it apart when
              looking at Angular vs React.
            </p>
          </div>
          <div>
            <h1 className="bg-slate-300 py-2 font-bold">React</h1>
            <p className="text-left mt-2">
              React, interestingly, combines the UI and behavior of components.
              For instance, here is the code to create a hello world component
              in React. In React, the same part of the code is responsible for
              creating a UI element and dictating its behavior.
            </p>
          </div>
          <div>
            <h1 className="bg-slate-300 py-2 font-bold">Vue</h1>
            <p className="text-left mt-2">
              When looking into Vue vs React, in Vue, UI and behavior are also a
              part of components, which makes things more intuitive. Also, Vue
              is highly customizable, which allows you to combine the UI and
              behavior of components from within a script. Further, you can also
              use pre-processors in Vue rather than CSS, which is a great
              functionality. Vue is great when it comes to integration with
              other libraries, like Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
