# chmod (change mode) - to change the access of a file or folder
-------------------------------------------------

there are 3types of user   
 1. user    
 2. group  
 3. other  

## To know the permission alloted to user we use command
ls -l  

## Everyone has permission to work on linux like  
user has rwx  
group has x  
other has x  

- r-read
- w-write
- x-execute

## To grant permission we use digit commomd i mean
4-read  
2-write  
1-create  

## To chnage the permission for user 
chmod 700 file/foldername  

## To remove all the permission from all user
chmod 000 file/foldername  

# Break of the command
---------------------
chmod usergroupother file/foldername  


and also we use addition if we want to give more than 1 permission like if i need to give read and write permission then i have to write (4-read 2-write === 4+2=6)