import { composeEventHandlers } from './index'; // Assuming the declaration file is in the same directory

// Example usage:
const originalHandler = (event: MouseEvent) => {
    console.log('Original event handler');
};

const customHandler = (event: MouseEvent) => {
    console.log('Custom event handler');
};

const composedHandler = composeEventHandlers(originalHandler, customHandler, { checkForDefaultPrevented: true });

// Now you can use composedHandler as your event handler
element.addEventListener('click', composedHandler);
