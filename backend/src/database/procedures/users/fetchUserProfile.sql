-- USE Project_DB;


CREATE OR ALTER PROCEDURE fetchUserProfile
  @userID VARCHAR(200)
AS
BEGIN
  SELECT
    user_id,
    first_name,
    last_name,
    email,
    role
  FROM Users
  WHERE user_id = @userID;
END;
