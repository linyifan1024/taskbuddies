# taskbuddies

task sharing plan

database:

1. create ephermeral task
2. create user: name, id, email, joined task(completed), current task
3. within task:

   - day by day post, check if any user within this task did not post, the user get kicked out(this applies to task owner too)
   - task creator need to specify the length of the task(days range), and what should they do each day
   - if task is not active, nobody post anything today past 12, will be killed with no records

frontend:

1. tasks display page(brows task, join task(if user login))

   - each task should be displayed as card
