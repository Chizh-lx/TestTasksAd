int[] hedgehogPopulation = { 0, 0, 6 };
int targetColor = 1;

int result = MinMeetings(hedgehogPopulation, targetColor);

Console.WriteLine(result);

static int MinMeetings(int[] population, int targetColor)
{
    int targetSum = population.Sum();
    int firstNonTarget = (targetColor + 1) % 3;
    int secondNonTarget = (targetColor + 2) % 3;

    int nullCounter = 0;
    int steps = 0;

    if ((population[firstNonTarget] - population[secondNonTarget]) % 3 != 0)
    {
        return -1;
    }

    foreach (int x in population)
    {
        if (x == 0)
        {
            nullCounter++;
        }

        if (nullCounter == 2)
        {
            return -1;
        }
    }


    while (population[targetColor] != targetSum)
    {
        steps++;

        if (population[firstNonTarget] > 0 && population[secondNonTarget] > 0)
        {
            population[firstNonTarget]--;
            population[secondNonTarget]--;
            population[targetColor] += 2;
            continue;
        }

        if (population[firstNonTarget] > 0)
        {
            population[firstNonTarget]--;
            population[targetColor]--;
            population[secondNonTarget] += 2;
            continue;
        }

        population[secondNonTarget]--;
        population[targetColor]--;
        population[firstNonTarget] += 2;
        continue;

    }

    return steps;
}