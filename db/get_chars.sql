select * from users u
join chars c on u.id = c.user_id
where u.id = $1
order by party asc
