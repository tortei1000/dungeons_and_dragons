update chars
set str = $2,
 dex = $3,
 con = $4,
 cha = $5,
 intel = $6,
 wis = $7
where char_name = $1
