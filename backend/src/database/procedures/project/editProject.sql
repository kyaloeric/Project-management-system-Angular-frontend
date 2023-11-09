
-- USE Project_DB;




CREATE OR ALTER PROCEDURE editProject
  @projectID VARCHAR(200),
  @project_name VARCHAR(250),
  @project_description VARCHAR(250),
  @dueDate DATE,
  @isDeleted BIT,
  @project_status VARCHAR(100)
AS
BEGIN
  UPDATE Projects
  SET 
    project_name = @project_name,
    project_description = @project_description,
    dueDate = @dueDate,
    isDeleted = @isDeleted,
    project_status = @project_status
  WHERE project_id = @projectID;
END;





