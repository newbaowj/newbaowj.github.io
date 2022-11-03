(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{407:function(a,t,s){"use strict";s.r(t);var e=s(19),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"示例-pod-调度优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-pod-调度优化"}},[a._v("#")]),a._v(" 示例 - Pod 调度优化")]),a._v(" "),t("p",[a._v("为了帮助用户更好的使用fluid，我们提供了一系列调度插件。\n通过为Pod自动注入亲和性相关信息，优化Pod的调度结果，提高集群的整体使用效率。")]),a._v(" "),t("h2",{attrs:{id:"前提条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[a._v("#")]),a._v(" 前提条件")]),a._v(" "),t("p",[a._v("您使用的k8s版本需要支持 admissionregistration.k8s.io/v1beta1（ Kubernetes version > 1.14 )")]),a._v(" "),t("h2",{attrs:{id:"使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("p",[t("strong",[a._v("为namespace添加标签")])]),a._v(" "),t("p",[a._v("为namespace添加标签fluid.io/enable-injection后，可以开启此namespace下Pod的调度优化功能")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ kubectl label namespace default fluid.io/enable-injection"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n")])])]),t("p",[a._v("如果该命名空间下的某些Pod，您不希望开启调度优化功能，只需为Pod打上标签fluid.io/enable-injection=false")]),a._v(" "),t("p",[a._v("例如，使用yaml文件方式创建一个nginx-1 Pod时，应对yaml文件做如下修改：")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Pod\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fluid.io/enable-injection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v("\n")])])]),t("p",[t("strong",[a._v("查看全部结点")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ kubectl get nodes\nNAME                      STATUS   ROLES    AGE   VERSION\nnode.172.16.0.16   Ready    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   16d   v1.20.4-aliyun.1\nnode.172.16.1.84   Ready    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   16d   v1.20.4-aliyun.1\n")])])]),t("p",[t("strong",[a._v("检查待创建的Dataset资源对象")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ cat"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("dataset-global.yaml")]),a._v('\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase\nspec:\n  mounts:\n    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/hbase/stable/\n      name: hbase\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hbase\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\n  fuse:\n    global: true\n    nodeSelector:\n      kubernetes.io/hostname: node.172.16.1.84\nEOF')]),a._v("\n")])])]),t("blockquote",[t("p",[a._v("这里通过nodeselector指定了")])]),a._v(" "),t("p",[t("strong",[a._v("创建Dataset资源对象")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ kubectl create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" dataset-global.yaml\ndataset.data.fluid.io/hbase created\n")])])]),t("p",[a._v("该配置文件片段中，包含了许多与Alluxio相关的配置信息，这些信息将被Fluid用来启动一个Alluxio实例。\n上述配置片段中的"),t("code",[a._v("spec.replicas")]),a._v("属性被设置为1,这表明Fluid将会启动一个包含1个Alluxio Master和1个Alluxio Worker的Alluxio实例。\n另外一个值得注意的是Fuse包含"),t("code",[a._v("global: true")]),a._v(",这样意味着Fuse可以全局部署，而不依赖于数据缓存的位置。")]),a._v(" "),t("p",[t("strong",[a._v("创建AlluxioRuntime资源并查看状态")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ kubectl create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" runtime.yaml\nalluxioruntime.data.fluid.io/hbase created\n\n$  kubectl get po "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-owide")]),a._v("\nNAME                 READY   STATUS    RESTARTS   AGE   IP             NODE                      NOMINATED NODE   READINESS GATES\nhbase-fuse-sc9b8     "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          10m   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.16")]),a._v(".1.84    node.172.16.1.84   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nhbase-master-0       "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          11m   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.16")]),a._v(".0.16    node.172.16.0.16   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nhbase-worker-dpn5b   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          10m   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.16")]),a._v(".1.84    node.172.16.1.84   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("在此处可以看到，有一个Alluxio Worker成功启动，并且运行在结点192.168.1.146上。Alluixo Fuse的数量为1，运行在子节点node.172.16.1.84上。")]),a._v(" "),t("h2",{attrs:{id:"运行示例1-创建没有挂载数据集的pod-它将尽量被调度到远离数据集的节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行示例1-创建没有挂载数据集的pod-它将尽量被调度到远离数据集的节点"}},[a._v("#")]),a._v(" 运行示例1: 创建没有挂载数据集的Pod，它将尽量被调度到远离数据集的节点")]),a._v(" "),t("p",[t("strong",[a._v("创建Pod")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ cat"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("nginx-1.yaml")]),a._v("\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-1\nspec:\n  containers:\n    - name: nginx-1\n      image: nginx-1\nEOF")]),a._v("\n$ kubectl create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" nginx-1.yaml\n")])])]),t("p",[t("strong",[a._v("查看Pod")])]),a._v(" "),t("p",[a._v("查看Pod的yaml文件，发现被注入了如下信息：")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("affinity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("nodeAffinity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("preferredDuringSchedulingIgnoredDuringExecution")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("preference")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("matchExpressions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n              "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" fluid.io/dataset"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("num\n                "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("operator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" DoesNotExist\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("weight")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("\n")])])]),t("p",[a._v("正如亲和性所影响的，Pod调度到了没有缓存的node.172.16.0.16节点。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ kubectl get pods nginx-1 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v("  custom-columns"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("NAME:metadata.name,NODE:.spec.nodeName\nNAME    NODE\nnginx-1   node.172.16.0.16\n")])])]),t("h2",{attrs:{id:"运行示例2-创建挂载数据集的pod-它将尽量往有数据集的节点调度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行示例2-创建挂载数据集的pod-它将尽量往有数据集的节点调度"}},[a._v("#")]),a._v(" 运行示例2: 创建挂载数据集的Pod，它将尽量往有数据集的节点调度")]),a._v(" "),t("p",[t("strong",[a._v("创建Pod")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ cat"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("nginx-2.yaml")]),a._v("\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-2\nspec:\n  containers:\n    - name: nginx-2\n      image: nginx-2\n      volumeMounts:\n        - mountPath: /data\n          name: hbase-vol\n  volumes:\n    - name: hbase-vol\n      persistentVolumeClaim:\n        claimName: hbase\nEOF")]),a._v("\n$ kubectl create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" nginx-2.yaml\n")])])]),t("p",[t("strong",[a._v("查看Pod")])]),a._v(" "),t("p",[a._v("查看Pod的yaml文件，发现被注入了如下信息：")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("affinity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("nodeAffinity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("preferredDuringSchedulingIgnoredDuringExecution")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("preference")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("matchExpressions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" fluid.io/s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("hbase\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("operator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" In\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"true"')]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("weight")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("requiredDuringSchedulingIgnoredDuringExecution")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("nodeSelectorTerms")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("matchExpressions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubernetes.io/hostname\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("operator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" In\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" node.172.16.1.84\n")])])]),t("p",[a._v("通过亲和性配置，应用被注入了两个信息，一个fuse所配置nodeSelector，另一个是和缓存worker的弱亲和性配置。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ kubectl get pods nginx-2 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v("  custom-columns"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("NAME:metadata.name,NODE:.spec.nodeName\nNAME    NODE\nnginx-1   node.172.16.1.84\n")])])]),t("p",[a._v("从结果上看, 可以看到pod被调度到了可以缓存的节点。")])])}),[],!1,null,null,null);t.default=n.exports}}]);