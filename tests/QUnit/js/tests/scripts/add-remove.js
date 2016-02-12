// JScript source code
module('Artist List Tests', {
    setup: function () {
        $.ajaxSetup({ "async": false });
        $("#qunit-fixture").load("artistList.html");
        $.getScript("../assets/js/artistList.js");
    },
    teardown: function () {
        $("#qunit-fixture").empty();
        $.ajaxSetup({ "async": true });
    }
});

test('Test the structure of artist list page, then add an artist', function () {
    expect(21);
    var addArtistDiv = $(".addArtist"),
 innerDiv = addArtistDiv.find('div'),
 innerForm = innerDiv.find('form'),
 catalogId = innerForm.find('input[name="catalog_id"]').val(),
 artistNameInput = innerForm.find('input[name="artist_name"]'),
 submitButton = innerForm.find('input[type="submit"]'),
 artistListTable = $("#artistList"),
 artistListIsTableStyle = artistListTable.is(".ui-tableStyle"),
 tableHead = artistListTable.find('thead'),
 tableHeadRows = tableHead.find('tr'),
 tableHeadCells = tableHeadRows.find('th'),
 tableBody = artistListTable.find('tbody'),
 tableBodyRows = tableBody.find('tr'),
 tableBodyCells = tableBodyRows.eq(0).find('td'),
 deleteButton = tableBodyCells.find('.deleteArtist'),
 deleteButtonStyled = deleteButton.is('.ui-button');
    equal(addArtistDiv.length, 1, 'One add artist div found');
    equal(innerDiv.length, 1, 'One inner div found');
    equal(innerForm.length, 1, 'One inner form found');
    equal(catalogId, "45", 'Catalog ID is correct');
    equal(artistNameInput.length, 1, 'One artist name input found');
    equal(artistNameInput.val(), "", 'Artist name input value is correct');
    equal(submitButton.length, 1, 'One submit button found');
    equal(artistListTable.length, 1, 'One artist list table found');
    ok(artistListIsTableStyle, 'Artist list table has tableStyle plugin applied');
    equal(tableHead.length, 1, 'One table head found');
    equal(tableHeadRows.length, 1, 'One table head row found');
    equal(tableHeadCells.length, 2, 'Two table head cells found');
    equal(tableBody.length, 1, 'One table body found');
    ok(tableBodyRows.length, 'One or more table body rows found');
    equal(tableBodyCells.length, 2, 'Two table row cells found');
    equal(deleteButton.length, 1, 'Delete artist button found');
    ok(deleteButtonStyled, 'Delete button has jquery ui button widget applied');
    ok(!innerDiv.is(":visible"), 'Add artist inner div is initially hidden');
    addArtistDiv.triggerHandler('click');
    ok(innerDiv.is(":visible"), 'Clicking add artist properly shows the inner div');
    artistNameInput.val("test artist");
    equal(artistNameInput.val(), "test artist", 'Updating value of input');
    innerForm.triggerHandler('submit');
    var artistId = parseInt(location.hash.split("-")[1]);
    ok(artistId, 'Submitting the add artist form properly redirects to the edit artist page');

    test("Verify that the artist from the previous test was added, then remove the artist", function () {
        expect(2);
        var artistListTable = $("#artistList"),
      tableBody = artistListTable.find('tbody'),
      tableBodyRows = tableBody.find('tr');
        equal(tableBodyRows.filter(':contains("test artist")').length, 1, 'Test artist found'); // fail
        tableBodyRows.filter(':contains("test artist")').find('.deleteArtist').triggerHandler('click');
        equal(tableBody.find('tr').length, tableBodyRows.length - 1, 'Row was properly removed.'); // fail
    });


});

/*test("Verify that the artist from the previous test was added, then remove the artist", function () {
    expect(2);
    var artistListTable = $("#artistList"),
      tableBody = artistListTable.find('tbody'),
      tableBodyRows = tableBody.find('tr');
    equal(tableBodyRows.filter(':contains("test artist")').length, 1, 'Test artist found'); // fail
    tableBodyRows.filter(':contains("test artist")').find('.deleteArtist').triggerHandler('click');
    equal(tableBody.find('tr').length, tableBodyRows.length - 1, 'Row was properly removed.'); // fail
});*/
