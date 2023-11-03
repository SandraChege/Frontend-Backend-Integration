CREATE OR ALTER PROCEDURE addNote(
    @id INT,
    @content VARCHAR (200),
    @createdAt VARCHAR(20)
)
AS
BEGIN
    INSERT INTO notesTable(id, content, createdAt)
    VALUES(@id, @content, @createdAt)
END