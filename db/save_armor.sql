update chars
set armor_class =$2,
  initiative =$3,
  speed =$4,
  hit_point_max =$5,
  current_hit_points =$6,
  temporary_hit_points =$7,
  hit_dice =$8,
  success_1 =$9,
  success_2 =$10,
  success_3 =$11,
  failures_1 =$12,
  failures_2 =$13,
  failures_3 =$14
where char_name = $1
