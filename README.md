Add-Type -AssemblyName PresentationFramework

# XAML definition of the GUI
[xml]$xaml = @"
<Window xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        Title="Date Updater" Height="300" Width="400">
    <Grid>
        <Button x:Name="btnStart" Content="Start" HorizontalAlignment="Left" VerticalAlignment="Top" Margin="10"/>
        <StackPanel HorizontalAlignment="Left" VerticalAlignment="Top" Margin="10,50,0,0">
            <TextBox x:Name="tbDate1" Width="200" IsReadOnly="True"/>
            <TextBox x:Name="tbDate2" Width="200" IsReadOnly="True"/>
            <TextBox x:Name="tbDate3" Width="200" IsReadOnly="True"/>
            <TextBox x:Name="tbDate4" Width="200" IsReadOnly="True"/>
            <TextBox x:Name="tbDate5" Width="200" IsReadOnly="True"/>
        </StackPanel>
    </Grid>
</Window>
"@

# Load XAML
$reader = (New-Object System.Xml.XmlNodeReader $xaml)
$window = [Windows.Markup.XamlReader]::Load($reader)

# Connect to controls in XAML
$btnStart = $window.FindName("btnStart")
$tbDate1 = $window.FindName("tbDate1")
$tbDate2 = $window.FindName("tbDate2")
$tbDate3 = $window.FindName("tbDate3")
$tbDate4 = $window.FindName("tbDate4")
$tbDate5 = $window.FindName("tbDate5")

# Create a Synchronized Hashtable for shared data
$syncHash = [hashtable]::Synchronized(@{})
$syncHash.Window = $window
$syncHash.TextBoxes = @($tbDate1, $tbDate2, $tbDate3, $tbDate4, $tbDate5)

# Define the script block with functions and processing logic
$scriptBlock = {
    param ($syncHash)

    # Function to update the textbox with the current date
    function Update-DateTextbox {
        param (
            [int]$index,
            [string]$date
        )
        $syncHash.Window.Dispatcher.Invoke([action]{
            $syncHash.TextBoxes[$index].Text = $date
        })
    }

    # Function to perform the task of updating dates in textboxes
    function PerformTask {
        for ($i = 0; $i -lt 5; $i++) {
            $currentDate = Get-Date
            Update-DateTextbox -index $i -date $currentDate.ToString()
            Start-Sleep -Seconds 60
        }
    }

    # Call the PerformTask function
    PerformTask
}

# Event handler for button click
$btnStart.Add_Click({
    # Start the Runspace and invoke the script block with syncHash as an argument
    $runspace = [powershell]::Create().AddScript($scriptBlock).AddArgument($syncHash)
    $runspace.BeginInvoke()
})

# Show the window
$window.ShowDialog() | Out-Null
