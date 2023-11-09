-- USE Project_DB;


CREATE OR ALTER PROCEDURE deleteProject
  @project_id VARCHAR(200)
AS
BEGIN
  DELETE FROM Projects
  WHERE project_id = @project_id;
END;
