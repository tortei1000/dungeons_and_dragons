delete from chars c
where c.id = $2 and c.user_id = $1;

select * from users u
join chars c on u.id = c.user_id
join features f on f.char_id = c.id
where u.id = $1