# Forms In HTML
- Forms are used to create a structure in HTML i.e. responsible to collect the data from the users.
- In a Web page we have two types of pages 
    1. Static Page 
    2. Dynamic page
<b> Difference between static webpage and Dynamic Webpage</b>  
  `Static Webpage:`
  - it is a webpage where user can only view the data that is already present in the document.
  - Using static webpage user will not have control to update the existing data or to remove any content from the webPage. 
  - eg. Portfolio website , Cooking Blogs,Wikipedia  
  `Dynamic Webpage:`
  - In this user will have access to view , update,create,delete the data from the webpage.
  - Using dynamic Webpage user can directly interact with the server
  - eg. facebook login Page, amazon signage etc.
- `< form>` tag is used to create a layout of a form
  -   for tag is reponsible to commumicate with the user
  - form tage has a property known as action i.e. used to specify the dynamic operation of a form
- `label`  
- it is used to provide name forms 
- it has a property known as `for` is used to connect the label and input
## Input Tag
`input` is a single tag that is used in html to accept the input from the users dynamically 
- it can perform or can accept various types of input based on its property known as `type`
### Types of input tags
1. `Text:` is used to create a text box that accepts any kind of data that is present in string format
2. `Date:` used to create a Date format input like " dd/mm/yyyy"
3. `Datetime-local:` used to accept both date and time hrs and minute format 
4. `Time:`used to create hrs and minute format
5. `email:` validates standard email formats.
6. `password:`used to hide the text 
7. `url:`
8. `tel:` accepts telephone number format, and we can specify the format using a property known as `pattern` 
9. `radio:` used to create radio button that can be only selected 
      - to build relation b/w multiple radio buttons we used a property `name` that accepts identical names 
10. `number:`that can increase or decrease an integer 
11. `checkbox:` that can select and unselect the values 
12. `submit:` creates a submit validation button 
13. `reset:` clear the values form the form
14. `file:`used to upload a document 
15. `range:`used to create a range bar
### properties of Input tag
1. `placeholder ` used to mention the message inside the input box
2. `require` make the filed mandatory to be filled 
3. `id:` used to mention the address of the input box
## Textarea tag
It is a input tag which can accept multi line inputs
it has two property i.e. `rows` and `columns` that specify the size of text area
## Select tag 
it is used to select any one option present inside the current tag
## Option Tag
used to create the list of option for a select tag
## Button tag
used to create a custom button in which the user can specify the operation

### example of the form is on form.html page.