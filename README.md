# AbsurdHat

Port of [LESSHat](http://lesshat.com/) to [AbsurdJS](http://absurdjs.com/). It is more like a automatic wrapper around the Javascript based LESSHat mixins.

WARNING: This is a proof-of-concept, for now only hatBackgroundImage (aka .background-image()) is tested!

## Usage

### Node.js

TODO

### Client-Side

```html
<script src="http://absurdjs.com/builds/absurd.js"></script>
<script src="https://rawgithub.com/carlos22/absurdhat/master/build/absurdhat.js"><script>
var absurd = Absurd();

// add hat* plugins
absurdhat(absurd);

// use
absurd.add({
    body: {
        hatBackgroundImage: 'linear-gradient(to bottom, #fb83fa 0%,#e93cec 100%)'
    }
}).compile(function(err, css) {   
    console.clear();
    console.log(css);
});

</script>
```

**[Demo](http://jsbin.com/vecovoda/1/edit?html,js,console)**

The client side build is generated using [browserify](http://browserify.org/). A standalone build named 'absurdhat' is generated. Make sure to use require() if you use requireJs or similar.

## Create own Build

The current build only includes hatBackgroundImage. You can easily add more in mixin.json.

## TODO

* Make tests work (should be not too hard)
* Use include/exclude of mixins instead of hard coded config
* Mixin Adapter needs to respect results.property
