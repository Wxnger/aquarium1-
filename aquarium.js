<!DOCTYPE html>
<html>
<head>
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" type="text/css" href="aquarium.css">

</head>

<body>

    <ul class="topnav">
        <li><a class="active" href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li class="right"><a href="#about">About</a></li>
    </ul>

    <h1>Custom Aquariums</h1>

    <div>

        <h2>Pricing</h2>

        <p>At Custom Aquariums we make aquariums to order. To find out how much it will
         cost for us to make your aquarium, enter the dimensions in the forms below:</p>
        
        <br>

        <table>
            <tr>
                <td><label for="length">Length (cm)</label></td>
                <td><input type="text" id="txtLength" /></td>
            </tr>
            <tr>
                <td><label for="width">Width (cm)</label></td>
                <td><input type="text" id="txtWidth" /></td>
            </tr>
            <tr>
                <td><label for="height">Height (cm)</label></td>
                <td><input type="text" id="txtHeight" /></td>
            </tr>
            <tr>
                <td>Cost:</td>
                <td id="tdCost"></td>
            </tr>
            <tr>
                <td></td>
                <td>
                <button id="btnCalcCost">Calculate Cost</button>
                <button id="btnReset">Reset</button></td>
            </tr>
        </table>
		<p id="tdSurfaceArea"></p>
		<p id="tdEdges"></p>
	</div>
	<script type="text/javascript" src="aquarium.js"></script> 
</body>

</html>