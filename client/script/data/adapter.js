Application.Adapter = DS.RESTAdapter.extend({
    didError: function (store, type, record, xhr) {
        record.xhr = xhr;

        if (xhr.status === 422) {
            var data = JSON.parse(xhr.responseText);

            store.recordWasInvalid(record, data.errors);
        } else {
            this._super.apply(this, arguments);
        }
    }
});