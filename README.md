**** Add at least 3 Project features

1. Many Registration Cards:

- Overview: This feature allows users to view multiple course registration options in the form of registration cards on a single page. Each card represents a different course or workshop that users can enroll in.

- User Benefits: This feature makes it easy for users to explore a wide range of courses at a glance and choose the ones that best fit their needs and interests.

2. Dynamic Cart:

- Overview: The dynamic cart feature allows users to add and manage their selected courses in a virtual cart. Users can review their choices, update quantities, and proceed to the registration or checkout process.

- User Benefits: Users can keep track of their selected courses conveniently, review their choices before finalizing registrations, and make any necessary adjustments with ease.

3. Dynamic Data Load with Fake API:

- Overview: This feature enhances the user experience by dynamically loading course data from a fake API or mock server, simulating a real-world scenario where data may come from an external source.

- User Benefits: Users will experience a more realistic and interactive website where course information is loaded dynamically, creating a smoother and more engaging registration process.

-----------------------------------------------------------------------------------------------

**** State: Discuss how I am managing the state in my assignment project.

1. Cart Management:

- Use Case: When users select courses to register for, i am use state to manage the items in their shopping cart.

- How State Helps: By storing the selected courses in the cart as part of the component's state, i am dynamically update the cart's content, display the number of items in the cart, and calculate the total cost as users add or remove courses. This provides a smooth and interactive registration process.

2. Dynamic Data Loading:

- Use Case: When fetching course data from a fake API , i'm use state to handle the loading and display of this data.

- How State Helps: State can be used to manage the loading status ("loading," "loaded," "error") and store the fetched course data. As data is retrieved asynchronously, state updates trigger UI changes, such as displaying a loading spinner during data retrieval and rendering course cards when the data is available.