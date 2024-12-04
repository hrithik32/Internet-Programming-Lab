<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <h2>Calculator</h2>
    <form action="" method="GET">
        <label for="num1">Number 1:</label>
        <input type="number" id="num1" name="num1" required><br><br>

        <label for="num2">Number 2:</label>
        <input type="number" id="num2" name="num2" required><br><br>

        <label for="operation">Operation:</label>
        <select id="operation" name="operation" required>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
        </select><br><br>

        <input type="submit" value="Calculate">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $num1 = $_GET['num1'];
        $num2 = $_GET['num2'];
        $operation = $_GET['operation'];
        $result = 0;

        switch ($operation) {
            case 'add':
                $result = $num1 + $num2;
                break;
            case 'subtract':
                $result = $num1 - $num2;
                break;
            case 'multiply':
                $result = $num1 * $num2;
                break;
            case 'divide':
                if ($num2 != 0) {
                    $result = $num1 / $num2;
                } else {
                    $result = "Error: Division by zero";
                }
                break;
            default:
                $result = "Error: Invalid operation";
                break;
        }

        echo "<h3>The result is: $result</h3>";
    }
    ?>
</body>
</html>
