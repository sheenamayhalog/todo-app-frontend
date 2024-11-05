# A Simple To-Do App

To run project clone project to local machine. In your terminal type `npm install`. After successfully installing
the dependencies, type `npm start` to run project in your local machine

### State Management: 
I will use React Context API for state management. The Context API is lightweight, easy to integrate, and suitable for managing global state without the complexity of Redux. It allows us to manage tasks globally while keeping UI states (like filters and search queries) managed locally within components.

### Testing Strategy
When deciding which parts of an application to unit test, focus on:

1. **Core Functionalities**: Test essential features, like form submissions or data rendering.
2. **User Interactions**: Ensure buttons, inputs, and other interactive elements respond as expected.
3. **Conditional Rendering and Filtering**: Verify that conditions (like filtering) display the correct data.
4. **Data Presentation**: Confirm that critical information is displayed correctly in the UI.
5. **Snapshot Testing**: Use snapshots for static or consistent layouts to detect unexpected changes.
6. **Minimal Mocking**: Mock only necessary dependencies, keeping tests focused on component behavior.
7. **Avoid Implementation Details**: Test what the component does, not how, to make tests resilient to refactoring.

These guidelines help ensure your tests cover important functionality, making your app reliable and tests maintainable.

### Code Structure:
The project is organized with separate folders for **components**, **context**, and **tests**:

- **`components`**: Contains reusable UI components, keeping the UI modular and easy to manage.
- **`context`**: Holds global state management logic, isolating it from the UI for cleaner organization and maintainability.
- **`tests`**: Includes test files for each component, ensuring each part is tested independently and keeping tests separate from implementation code.

This structure follows best practices for readability, scalability, and modularity, making it easy to maintain and extend the application.