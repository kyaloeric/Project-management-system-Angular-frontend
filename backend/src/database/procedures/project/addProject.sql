-- USE Project_DB;


CREATE OR ALTER PROCEDURE addProject
  @project_id VARCHAR(200),
  @project_name VARCHAR(250),
  @project_description VARCHAR(250),
  @dueDate VARCHAR(200),
  @project_status VARCHAR(100)
AS
BEGIN
  INSERT INTO Projects (project_id, project_name, project_description, dueDate, project_status,created_at)
  VALUES (@project_id, @project_name, @project_description, @dueDate, @project_status, GETDATE());
END;



