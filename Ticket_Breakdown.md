# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: Add Custom ID Field in the Database

Description: Is necessary to add the field for custom ID in the database for the table Agents so the application can insert the new information.

Acceptance Criteria:
  - Field for custom ID added in the table;
  - The field accept aphanumeric characters;

Estimate time: 
  - 2 hours;

Implementation Details:
  1. Modify the table schema to include the new column

---

Ticket 2: Update the 'getShiftsByFacility' function

Description: The function 'getShiftsByFacility' need to be able to get the custom ID field from table Agents

Acceptance Criteria:
  - Function 'getShiftsByFacility' returning the agents with the new custom ID field;
  - Tests for all the modifications done;

Estimate time:
  - 3 hours;

Implementation Details:
  1. The function 'getShiftsByFacility' need to receive the new column when getting the agents from database
  2. Update the return object to include the new custom ID information
  3. Add tests to guarantee the modification logic is correct
  
---

Ticket 3: Update the 'generateReport' function

Description: The function 'generateReport' need to generate the PDF with the new field Custom ID

Acceptance Criteria:
  - Function 'generateReport' 
  - Modify and add the necessary tests to make sure the logic is correct;

Estimate time:
 - 3 hours;
  
Implementation Details:
  1. Include the new field Custom ID when generating the PDF;
  2. Add tests to confirm the new field is being added to the PDF file; 
   