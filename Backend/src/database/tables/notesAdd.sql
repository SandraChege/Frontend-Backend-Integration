USE noteTakingApp;

CREATE TABLE notesAdded (
    id INT NOT NULL,
    content VARCHAR(200) NOT NULL,
    createdAt VARCHAR(50)
)

SELECT * FROM notesAdded;

DROP TABLE notesAdded
