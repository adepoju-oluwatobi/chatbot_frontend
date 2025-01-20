# Embedding the Chat Widget

This guide explains how to embed the chat widget in both a React app and a plain HTML project.

---

## 1. Embed the Widget in a React App

To embed the widget in a React app, use the following steps:

### Steps:

1. **Add the `<iframe>` Component**:
   
   Open the desired React component where you want to embed the widget and add an `<iframe>`.

   ```tsx
   const assistantId = 'asst_79azoCwz4RXE6luvA1xQdvLo'; // Replace with the actual assistant ID

   const iframeSrc = `http://localhost:5174?assistant_id=${encodeURIComponent(assistantId)}`;

   return (
     <div>
       <iframe
         src={iframeSrc}
         style={{
           zIndex: '999',
           width: '100%',
           height: '100%',
           border: 'none',
           position: 'absolute',
         }}
         title="Chat Widget"
       ></iframe>
     </div>
   );
   ```

2. **Customize the Widget Styles**:
   - Adjust the `style` attribute of the `<iframe>` to fit your app's layout.
   - Example: Set `width` to `300px` and `position` to `fixed` for a floating widget.

3. **Test the Integration**:
   - Run your React app (`npm start` or `yarn start` or `npm run dev` or `yarn dev`) and ensure the widget is visible and functional.

4. **Deployment**:
   - Replace `http://localhost:5174` with the production URL of your widget (e.g., `https://your-widget-domain.com`).

---

## 2. Embed the Widget in an HTML Project

To embed the widget in a plain HTML project, follow these steps:

### Steps:

1. **Add the `<iframe>` to Your HTML File**:
   
   Insert the following `<iframe>` code in your HTML file where you want the widget to appear:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Embed Chat Widget</title>
   </head>
   <body>
     <iframe
       src="http://localhost:5174?assistant_id=asst_79azoCwz4RXE6luvA1xQdvLo"
       style="
         z-index: 999;
         width: 100%;
         height: 100%;
         border: none;
         position: absolute;
       "
       title="Chat Widget"
     ></iframe>
   </body>
   </html>
   ```

2. **Test the Integration**:
   - Open the HTML file in your browser to test the widget.

3. **Deployment**:
   - Update the `src` attribute with your widget's production URL.
   - Example:
     ```html
     src="https://your-widget-domain.com?assistant_id=asst_79azoCwz4RXE6luvA1xQdvLo"
     ```

---

## Notes

- **Assistant ID**:
  Ensure the `assistant_id` parameter is provided to identify the correct assistant for the widget.

- **Development vs. Production**:
  Replace `http://localhost:5174` with your production URL when deploying.

- **Styling the Widget**:
  - Adjust `style` attributes to fit the layout and design of your app or webpage.
  - Example: Use `position: fixed` for a floating widget on the side of the screen.

---

By following these steps, you can seamlessly integrate the chat widget into both React and HTML projects.

