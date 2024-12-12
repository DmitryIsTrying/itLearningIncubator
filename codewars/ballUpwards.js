function maxBall(v0) {
  const v0_m_s = v0 * (1000 / 3600)

  const g = 9.81

  const t_max = v0_m_s / g

  const t_max_tenths = Math.round(t_max * 10)

  return t_max_tenths
}
