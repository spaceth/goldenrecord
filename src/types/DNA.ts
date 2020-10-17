const DNA = {
    'A': 'A',
    'T': 'T',
    'C': 'C',
    'G': 'G',
} as const

export type DNA = (typeof DNA)[keyof typeof DNA]
