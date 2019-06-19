select * from users u
join chars c on u.id = c.user_id
join languages l on l.char_id = c.id
join proficiencies p on p.char_id = c.id
join attacks a on a.char_id = c.id
join dungeoneer_pack d on d.char_id = c.id
join outlander_gear o on o.char_id = c.id
join features f on f.char_id = c.id
join equipped e on e.char_id = c.id
